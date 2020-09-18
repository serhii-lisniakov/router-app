import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import './Fotos.css'
import FullFoto from './FullFoto'


export const fotos = [
    {
        id: 1,
        path:'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 2,
        path:'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 3,
        path:'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 4,
        path:'https://images.pexels.com/photos/71116/hurricane-earth-satellite-tracking-71116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 5,
        path:'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 6,
        path:'https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 7,
        path:'https://images.pexels.com/photos/2613407/pexels-photo-2613407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 8,
        path:'https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 9,
        path:'https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 10,
        path:'https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 11,
        path:'https://images.pexels.com/photos/2700234/pexels-photo-2700234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 12,
        path:'https://images.pexels.com/photos/1079033/pexels-photo-1079033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 13,
        path:'https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 14,
        path:'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 15,
        path:'https://images.pexels.com/photos/1077531/pexels-photo-1077531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 16,
        path:'https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 17,
        path:'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    }
]

export default class Fotos extends Component {
    state = {
        fotos: [...fotos],
    }

    render() {
        return (
            <>
                <Route path={`/fotos/:id`} component={FullFoto}/>
                <Route path={`/fotos`} render={() => (
                    <>
                        <div className='fotos-wrapper'>
                            {this.state.fotos.map(foto => (
                                <Link   to={`/fotos/${foto.id}`}
                                        className='foto-wrapper'
                                        style={{backgroundImage: `url(${foto.path})`}}
                                        key={foto.id}>
                                </Link>
                            ))}
                        </div>
                    </>
                )}/>
            </>
        )
    }
}