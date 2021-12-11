import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

const Category = () => {
    let match = useRouteMatch({
        path: "/category",
        url: "/category",
        isExact: false,
        params: {}
    })

    return <div>
        <h2>Category Page</h2>
        <ul>
            <li>
                <Link to={`${match.url}/foods`}>Foods</Link>
            </li>
            <li>
                <Link to={`${match.url}/drinks`}>Drinks</Link>
            </li>
        </ul>
        <hr />
        <Switch>
            <Route path="/category/foods">
                List of foods: bakso, sate, soto, dll
            </Route>
            <Route path="/category/drinks">
                List of drinks: air mineral, es teh, kopi, dll
            </Route>
        </Switch>
    </div>
}

export default Category