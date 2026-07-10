import React, {Component} from 'react';

class StoreInfo extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#f5f5f5",
                color: "#333",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "25px",
            }}>
                <h2>Tienda compuesta por componentes</h2>
                <p>
                    Venta de accesos para computadoras.
                </p>
            </div>
        );
    }
};

// Exportacion del componente
export default StoreInfo;