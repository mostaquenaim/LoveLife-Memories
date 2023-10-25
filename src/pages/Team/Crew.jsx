import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsEnvelope } from 'react-icons/bs';
import { ProjectContext } from '../../Component/Context/Provider';

const Crew = () => {
    const [crewMembers, setCrewMembers] = useState([])
    const { setLoading } = useContext(ProjectContext);

    // useEffect(() => {
    //     setLoading(true);

    //     // Fetch the JSON data from the public folder
    //     fetch('/crew.json')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCrewMembers(data);
    //             setLoading(false); // Set loading to false after data is fetched
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //             setLoading(false); // Make sure loading is set to false even if there's an error
    //         });
    // }, [setLoading]);



    return (
        <>
            <div className='bg-base-100 min-h-screen'> 
                <section>
                    <div className='py-40'>
                        <header className="text-center py-4 text-neutral">
                            <h1 className="text-3xl font-semibold">Our Crew</h1>
                        </header>

                        <p className="my-6 mx-10 text-center text-lg opacity-70">
                            Meet the talented individuals who make our team exceptional.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5">
                            {crewMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="p-5 rounded-lg text-center">
                                    <div className="mb-3">
                                        <img src={member.image} alt={member.name} className="rounded-full h-64 w-64 mx-auto border-4 border-neutral" />
                                    </div>
                                    <h2 className="text-lg font-semibold">{member.name}</h2>
                                    <p className="text-sm text-gray-600">{member.position}</p>
                                    <div className="mt-2 flex justify-center">
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="mx-2">
                                            <BsFacebook size={20} />
                                        </a>
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mx-2">
                                            <BsInstagram size={20} />
                                        </a>
                                        <a href={`tel:${member.phone}`} className="mx-2">
                                            <BsFillTelephoneFill size={20} />
                                        </a>
                                        <a href={`mailto:${member.email}`} className="mx-2">
                                            <BsEnvelope size={20} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default Crew;
