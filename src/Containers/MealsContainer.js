import React, { Component } from 'react'
import Meal from '../Components/Meal'

class MealsContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            meals: [],
            category: ""
        }
    }

    componentDidUpdate(prevState){
        if (prevState.category !== this.props.category){
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    meals: data.meals
                })
            })
        }
    }

    render() {
        const meals = this.state.meals.map((meal, i) => {
            return <Meal key={i} meal={meal.strMeal} />
        })

        return (
            <div>
                {this.props.category !== "" ? meals : <h3>Please select a category</h3>}
            </div>
        )
    }
}

export default MealsContainer