package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB

type Voucher struct {
	ID          int64
	title       string
	discount    int64
	status      int64
	description string
	buyReq      int64
	itemFree    int64
	voucherType int64
	dateStart   string
	dateEnd     string
	productRage string
	code        string
}

func main() {
	// Capture connection properties.
	cfg := mysql.Config{
		User:                 "root",
		Passwd:               "",
		Net:                  "tcp",
		Addr:                 "127.0.0.1:3306",
		DBName:               "jonas",
		AllowNativePasswords: true,
	}
	// Get a database handle.
	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Println("Connected!")

	voucher, err := voucherByTitle("Photo Studio")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Voucher found by name: %v\n", voucher)

	vou, err := voucherByID(1)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Voucher found by id: %v\n", vou)

	vouID, err := addVoucher(Voucher{
		title:       "Book 1 photo get 1 free frame",
		status:      1,
		discount:    0,
		description: "book any photo get free any frame",
		buyReq:      1,
		itemFree:    1,
		voucherType: 1,
		dateStart:   "2024-09-09",
		dateEnd:     "2025-01-01",
		productRage: "for any frame",
		code:        "vch_010101",
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("ID of added album: %v\n", vouID)

}

func voucherByTitle(title string) ([]Voucher, error) {
	// An vouums slice to hold data from returned rows.
	var voucher []Voucher

	rows, err := db.Query("SELECT * FROM voucher WHERE title = ?", title)
	if err != nil {
		return nil, fmt.Errorf("voucherByTitle %q: %v", title, err)
	}
	defer rows.Close()
	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var vou Voucher
		if err := rows.Scan(&vou.ID, &vou.title, &vou.discount, &vou.status, &vou.description, &vou.buyReq, &vou.itemFree, &vou.voucherType, &vou.dateStart, &vou.dateEnd, &vou.productRage, &vou.code); err != nil {
			return nil, fmt.Errorf("voucherByTitle %q: %v", title, err)
		}

		voucher = append(voucher, vou)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("voucherByTitle %q: %v", title, err)
	}
	return voucher, nil
}

func voucherByID(id int64) (Voucher, error) {
	// An Voucher to hold data from the returned row.
	var vou Voucher

	rows := db.QueryRow("SELECT * FROM voucher WHERE id = ?", id)
	if err := rows.Scan(&vou.ID, &vou.title, &vou.discount, &vou.status, &vou.description, &vou.buyReq, &vou.itemFree, &vou.voucherType, &vou.dateStart, &vou.dateEnd, &vou.productRage, &vou.code); err != nil {
		if err == sql.ErrNoRows {
			return vou, fmt.Errorf("voucherById %d: no such voucher", id)
		}
		return vou, fmt.Errorf("voucherById %d: %v", id, err)
	}
	return vou, nil
}

func addVoucher(vou Voucher) (int64, error) {
	result, err := db.Exec("INSERT INTO voucher (title, discount, status, description, buyReq, itemFree, voucherType, dateStart, dateEnd, productRange, code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", vou.title, vou.discount, vou.status, vou.description, vou.buyReq, vou.itemFree, vou.voucherType, vou.dateStart, vou.dateEnd, vou.productRage, vou.code)
	if err != nil {
		return 0, fmt.Errorf("addVoucher: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addVoucher: %v", err)
	}
	return id, nil
}
