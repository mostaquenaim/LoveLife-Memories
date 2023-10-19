import { useLoaderData } from "react-router-dom";

const BOD = () => {
    const directors = useLoaderData();

    return (
        <>
            <div className="container mx-auto py-40">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">Board of Directors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {directors.map((director) => (
                        <div key={director.id} className="border p-4 rounded-lg">
                            <div className="text-center">
                                <img src={director.image} alt={director.name} className="rounded-full h-32 w-32 mx-auto mb-4" />
                                <h2 className="text-xl font-semibold">{director.name}</h2>
                                <p className="text-primary">{director.position}</p>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-gray-600">Email: <a href={`mailto:${director.email}`}>{director.email}</a></p>
                                <p className="text-gray-600">Phone: {director.phone}</p>
                                <p className="text-gray-600">
                                    <a href={director.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BOD;
