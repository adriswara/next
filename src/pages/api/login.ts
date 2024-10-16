import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import GetData from '@/services/getData.service';
import DrawAlert from '@/services/alertDraw.service';
import { NextResponse } from 'next/server'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;
    const usersGet = await GetData("login/" + username)
    const users = usersGet.User
    const user = users.find(user => user.name_user === username);
    if (!user) {
        DrawAlert(1,"Failed","Invalid username")
        return res.status(401).json({ message: 'Invalid username' });
    }
    const isPasswordValid = users.find(user => user.password_user === password);
    
    if (!isPasswordValid) {
        DrawAlert(1,"Failed","Invalid password")
        return res.status(401).json({ message: 'Invalid password' });
    }
  
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    DrawAlert(3,"Success","Login Success")
    res.status(200).json({ token });
    return NextResponse.json({ token })
}
