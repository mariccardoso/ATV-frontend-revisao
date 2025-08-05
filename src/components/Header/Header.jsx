import styles from './Header.module.css';

const Header = ({titulo, descricao}) => {
    // Define valores padrão para os props
    const tituloExibido = titulo ? titulo :  " 🛒 Loja de Eletrônicos";
    const descricaoExibida = descricao ? descricao : "Encontre os melhores produtos eletrônicos aqui!";
    return (
        <div className={styles.header}>
        <h1>{tituloExibido}</h1>
        <p>{descricaoExibida}</p>
        <p>📊 Total de produtos: <span id="totalProducts">0</span></p>
    </div>
    );
}

export default Header;