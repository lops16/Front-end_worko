import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import UserIcon from '@mui/icons-material/AccountCircle';
import './Productos.scss';

export default function Producto() {
    return (
        <div >
            <div>
                <ArrowLeftIcon />
            </div>
            <div>
                <h2>Camiseta</h2>
                <p>Work, sweet work</p>
                <p>20 €</p>
            </div>
            <div>
                <img
                    alt="Camiseta"
                    src="/placeholder.svg"
                />
                <div >
                    <ArrowLeftIcon />
                    <ArrowRightIcon />
                </div>
            </div>
            <div>
                <p>Camiseta de manga corta en color blanco, con estampado de ilustración y la frase: Work, sweet work</p>
            </div>
            <div>
                <select>
                    <selectTrigger id="size">
                        <selectValue placeholder="Talla" />
                    </selectTrigger>
                    <selectContent position="popper">
                        <selectItem value="small">S</selectItem>
                        <selectItem value="medium">M</selectItem>
                        <selectItem value="large">L</selectItem>
                        <selectItem value="extra-large">XL</selectItem>
                    </selectContent>
                </select>
                <input defaultValue="1" id="quantity" min="1" type="number" />
            </div>
            <div >
                <button>Añadir a la cesta</button>
            </div>
        </div>
    );
}

