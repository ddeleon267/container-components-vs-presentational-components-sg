import React, { Component } from 'react'
import Category from '../Components/Category'
import MealsContainer from './MealsContainer'

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

class CategoriesContainer extends Component {

    state = {
        categories: [],
        category: ""
    }

    handleOnClick = (event) => {
        this.setState({
            category: event.target.id
        })
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                categories: data.categories
            })
        })
    }

    render() {
        const categories = this.state.categories.map((category, i) => {
            return <Category key={i} category={category.strCategory} handleClick={this.handleOnClick}/>
        })

        return (
            <div>
                The Meal Categories
                <br/>
                {categories}
                <hr/>
                {this.state.category != "" ? <h2>The {this.state.category} Meals</h2> : ""}
                <MealsContainer category={this.state.category}/>
            </div>
        )
    }
}

export default CategoriesContainer
