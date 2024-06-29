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
	description int64
	discount    string
	title       string
	status      int64
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
	fmt.Printf("Voucher found: %v\n", voucher)
}

func voucherByTitle(name string) ([]Voucher, error) {
	// An albums slice to hold data from returned rows.
	var voucher []Voucher

	rows, err := db.Query("SELECT * FROM voucher WHERE title = ?", name)
	if err != nil {
		return nil, fmt.Errorf("voucherByTitle %q: %v", name, err)
	}
	defer rows.Close()
	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var alb Voucher
		if err := rows.Scan(&alb.ID, &alb.title, &alb.description, &alb.status, &alb.discount); err != nil {
			return nil, fmt.Errorf("voucherByTitle %q: %v", name, err)
		}
		voucher = append(voucher, alb)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("voucherByTitle %q: %v", name, err)
	}
	return voucher, nil
}
