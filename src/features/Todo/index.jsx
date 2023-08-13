import React, { useState } from 'react';

import TodoList from './components/TodoList';
import ListPage from '../Todo/pages/ListPage'
import DetailPage from '../Todo/pages/DetailPage'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import NotFound from '../../components/NotFound';


TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>

                <Route component={NotFound}/>
            </Switch>
        </div>
    );

}
export default TodoFeature;