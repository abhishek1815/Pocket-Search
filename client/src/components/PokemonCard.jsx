import React from 'react';


function PokemonCard({ data }) {
    

    if (!data) return null;

    return (
        <div className="data-display" style={{ 
            border: '1px solid #b92e00', 
            padding: '20px', 
            marginTop: '20px',
            backgroundColor: '#f3d27aff',
            borderLeftWidth: '5px',
            borderRadius: '10px'
        }}>
            <h2>{data.name.toUpperCase()}</h2>
            
            <img 
                src={data.image} 
                alt={data.name} 
                style={{ width: '150px', height: '150px' }} 
            />
            
            <div className="stats">
                <p><strong>ID:</strong> #{data.id}</p>
                <p><strong>Types:</strong> {data.types.join(', ')}</p>
            </div>
        </div>
    );
}

export default PokemonCard;