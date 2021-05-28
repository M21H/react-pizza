import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ activeCategory, onClickCategory, items }) => {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}>
					Все
				</li>
				{items &&
					items.map((item, index) => (
						<li
							className={activeCategory === index ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={`${item}-${index}`}>
							{item}
						</li>
					))}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
	activeCategory: null,
	categories: [],
}

export default Categories
