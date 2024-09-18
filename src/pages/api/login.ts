import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import GetData from '@/services/getData.service';



const users = [
    { id: 1, username: 'Ajon Doe', password: 'admin' } // hashed password
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;
    const users2Get = await GetData("login/" + username)
    const users2 = users2Get.User
    const user = users.find(user => user.username === username);
    const user2 = users2.find(user => user.name_user === username);
    console.log(user)
    console.log(user2)
    if (!user2) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    //   const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = users.find(user => user.password === password);
    const isPasswordValid2 = users2.find(user => user.password_user === password);
    
    if (!isPasswordValid2) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    const token = jwt.sign({ id: user2.id, username: user2.username }, 'your_jwt_secret', { expiresIn: '1h' });

    console.log(token)
    res.status(200).json({ token });
}
