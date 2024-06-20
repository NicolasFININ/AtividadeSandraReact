
import styles from './Sobre.module.css'
import avatar from './images/profile-user.png'
import html from './images/code.png'
import css from './images/css.png'
import js from './images/file.png'
import react from './images/science.png'
import node from './images/nodes.png'
import sql from './images/sql-server.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Sandra Alves</span> <br />
                    <strong>Dev e Professora</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2010.</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Fico muito orgulhosa em testemunhar a evolução pessoal e profissional de cada aluno</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

