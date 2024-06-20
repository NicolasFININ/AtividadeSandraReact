import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Feito por</h4>
                        <ul>
                            <li><a href="#">Nicolas Campos</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Follow us</h4>

                        <div className='social-links'>
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer