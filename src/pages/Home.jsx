import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Home = () => {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)

	//зберігає силку на обєкт щоб не ререндирити меню
	const onSelectCategory = React.useCallback(index => {
		dispatch(setCategory(index))
	}, [])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onClickItem={onSelectCategory} categories={categoryNames} />
				<SortPopup
					items={[
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items && items.map(item => <PizzaBlock key={item.id} {...item} />)}
			</div>
		</div>
	)
}

export default Home
