import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../comnponents/Post";
import { Routes, Route, Link } from "react-router-dom"

const Home = () =>{

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () =>{
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:3002/posts/");
            console.log(response.data.result);
            setPosts(response.data.result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getPosts()
    }, [])

    return(
        <div>
            <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    New Post
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? (
                    "Sto caricando i Post"
                ): (
                    <>
                    {posts.length > 0 ? (
                        <>
                            {posts.map((post, index) => {
                                return (
                                    <Post key={index} post={post}/>
                                )
                            })}
                        </>
                    ) : (
                        <div>
                            Nessun Post trovato
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Home