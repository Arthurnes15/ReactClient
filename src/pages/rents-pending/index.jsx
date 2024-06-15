import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { Rent } from '../../components/Rent';
import { Footer } from '../../components/Footer';
import { dateFormatter } from '../../utils';
import './styles.css';
import Axios from 'axios';

export const RentsPending = () => {
    const [listRentsPending, setListRentsPending] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/rents-pending")
        .then((response) => {
            setListRentsPending(response.data)
        })
    }, []);

    return(
        <>
            <Navbar />
            <article className="container rents">
                {typeof listRentsPending !== "undefined" && 
                    listRentsPending.map((value) => {
                        return(
                                <Rent key={value.id_aluguel}
                                idRent={value.id_aluguel}
                                classRent={"rent-late"}
                                imgRented={value.url_imagem}
                                nameBook={value.nome_livro}
                                nameStudent={value.nome_aluno}
                                groupStudent={value.nome_turma}
                                dateRent={dateFormatter(value.data_aluguel)}
                                dateReturn={dateFormatter(value.data_devolucao)}
                                />
                        )
                    })
                }
            </article>
            <Footer />
        </>
    );
}