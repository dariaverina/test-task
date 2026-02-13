import { useAuth } from "../hooks/useAuth";

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    Личный кабинет
                </h1>
                
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">
                        {user?.email}
                    </span>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Выйти
                    </button>
                </div>
            </div>
        </header>
    );
}