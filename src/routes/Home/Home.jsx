import { useState, useEffect } from "react";

const Home = () => {
    const [listaproduto, setListaProduto] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/produtos")
            .then((res) => res.json())
            .then((data) => {
                setListaProduto(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    return (
        <>
            <div>
                {listaproduto.map((item, index) => (
                    <div key={index}>
                        <h2>{item.nome}</h2>
                        <img src={item.foto} alt={item.nome} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
