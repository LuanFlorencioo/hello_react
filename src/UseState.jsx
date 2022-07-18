import { useState } from "react"
import styled from "styled-components";

const BuySystem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .BuyConfig {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .BuyList {
        width: 45%;
        height: 100%;
        border-radius: 12px;
        color: #3df;
        text-align: right;
        ul {
            padding: 0 20px 0 0;
            list-style: none;
        }
    }
`

export const UseState = () => {

    const [points, setPoints] = useState(33);
    const modifyPoints = (e) => {
        const action = +e.target.textContent.slice(-2);
        setPoints(points + (action));
    }

    const [things, setThings] = useState(['Chá', 'Suco de azul']);
    const insertThings = () => {
        let newThing = document.querySelector('input').value;
        (newThing) ? setThings([newThing, ...things]) : null;
        document.querySelector('input').value = '';
    }
    const resetThings = () => {
        setThings([]);
    }
    const renderList = things.map((thing, i) => <li key={i}>{thing}</li>);

    const handleKeyPress = (e) => {
        const enterKey = e.key;
        (enterKey === 'Enter')
            ? insertThings()
            : null;
    }

    return (
        <>
            <h2><code>useState()</code></h2>
            <p>Hook para criar states <q>estados</q> capaz de manipular e salvar dados, elementos, objetos, arrays...</p>
            <p>O exemplo mais simples que se pode dar é este abaixo, onde pode-se mudar o estado 'points' com os botões:</p>
            <p>points: {points}</p>
            <button onClick={modifyPoints}>Aumentar +1</button>
            <button onClick={modifyPoints}>Diminuir -1</button>

            <hr />

            <BuySystem>
                <div className="BuyConfig">
                    <p>Outro exemplo é usar o useState com arrays, no caso desse exemplo, vamos fazer uma lista de compras</p>
                    <input type="text" placeholder="digite aqui" maxLength={12} onKeyPress={handleKeyPress} />
                    <button onClick={insertThings}>Inserir</button>
                    {things.length >= 1 ? <button onClick={resetThings}>Resetar</button> : ''}
                </div>

                <div className="BuyList">
                    <ul>
                        {renderList}
                    </ul>
                </div>
            </BuySystem>
        </>
    )
}