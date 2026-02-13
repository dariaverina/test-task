import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Неверный email или пароль');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-200">
            <div className="w-96 p-6 bg-white rounded ">
                <h2 className="text-2xl font-bold mb-4 text-center">Вход</h2>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block mb-1 text-sm">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Войти
                    </button>
                    
                    <p className="mt-4 text-center text-sm">
                        Нет аккаунта?{' '}
                        <a href="/register" className="text-blue-500">
                            Зарегистрироваться
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}   