import Header from '../components/Header';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-gray-600">
                        Создание ссылок тут 
                    </p>
                </div>
            </div>
        </div>
    );
}