import React from 'react';

import './styles.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">

                <header className="home-title">
                    <h2>Bem-vindos!</h2>
                </header>

                <main className="home-text">
                    <p className="home-description">
                        Olá, queridos! Esse site é para passarmos as informações sobre horário e <span><a className="link-list" href="/Address">local do evento </a></span>.
                    </p>
                    <p className="home-description">
                        Vocês também devem confirmar sua presença até o dia <span>00/00/2022</span> pra termos noção de quantas pessoas irão.
                    </p>
                    <p className="home-description">
                        E por último, não menos importante, aqui contém nossa <a className="link-list" href="/GiftList" >Lista do Chá de Panela</a>. Para nos presentear basta clicar no item, selecionar e pronto.
                    </p>

                    <p className="home-description">
                        Mas caso prefira nos abençoar com alguma quantia ao invés de um item, é só clicar na opção <span>Doar em Dinheiro</span>.
                    </p>

                    <p className="home-description footer-description">
                        Esperamos vocês lá! <span className="heart-icon">&#10084;</span>
                    </p>

                </main>

            </div>
        </div>
    )
}