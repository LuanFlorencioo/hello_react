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
    }

    .BuyList {
        width: 50%;
        text-align: right;
    }
`

export const UseState = () => {
    const [points, setPoints] = useState(33);

    const handleClick = (e) => {
        const action = +e.target.textContent.slice(-2);
        setPoints(points + (action));
    }

    const [thing, setThing] = useState([]);

    const insertThing = () => {
        const fres = document.querySelector('input').value;
        const itemList = <li key={Math.random()}><code>{fres}</code></li>;
        setThing([itemList, ...thing]);
    }

    return (
        <>
            <h2><code>useState()</code></h2>
            <p>Hook para criar states <q>estados</q> capaz de manipular e salvar dados, elementos, objetos, arrays...</p>
            <p>O exemplo mais simples que se pode dar é este abaixo, onde pode-se mudar o estado 'points' com os botões:</p>
            <p>points: {points}</p>
            <button onClick={handleClick}>Aumentar +1</button>
            <button onClick={handleClick}>Diminuir -1</button>

            <hr />

            <p>Outro exemplo é usar o useState com arrays, no caso desse exemplo, vamos fazer uma lista de compras</p>
            <BuySystem>
                <div className="BuyConfig">
                    <input type="text" placeholder="digite aqui" maxLength={12} />
                    <button onClick={insertThing}>Inserir</button>
                </div>

                <div className="BuyList">
                    <ul>
                        {thing}
                    </ul>
                </div>
            </BuySystem>
        </>
    )
}