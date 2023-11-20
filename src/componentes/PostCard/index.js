import { Link } from 'react-router-dom';
import './Post.css';
import minhaFoto from 'assets/minha_foto.png'
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function PostCard({post}){
    const rotaImg = `/assets/posts/${post.id}/capa.png`
    return (
        <Link to={`/posts/${post.id}`}>
            <div className="post">
                <img
                    className="capa"
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <h2 className="titulo">
                    {post.titulo}
                </h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}