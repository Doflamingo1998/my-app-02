import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';

import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'new',
        },
    ]

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search])

    const [isDisplay, setIsDisplay] = useState(true);

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        //newTodoList[idx] = newTodo;
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        //update TodoList
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleUnmount = () => {
        setIsDisplay(false);
    }
    const handleMount = () => {
        setIsDisplay(true);
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What do you do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />


            <h3>Todo List</h3>
            {isDisplay && <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>}

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
                <button onClick={handleUnmount}>Unmount</button>
                <button onClick={handleMount}>Mount</button>
            </div>
        </div>
    );


}
export default ListPage;