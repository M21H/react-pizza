import React from 'react'

const Categories = ({ categories, onClickItem }) => {
	const [activeItem, setActiveItem] = React.useState(null)

	const onSelectItem = index => {
		setActiveItem(index)
	}

	return (
		<div className='categories'>
			<ul>
				<li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
					Все
				</li>
				{categories &&
					categories.map((item, index) => (
						<li
							className={activeItem === index ? 'active' : ''}
							onClick={() => {
								onClickItem(item)
								onSelectItem(index)
							}}
							key={`${item}-${index}`}>
							{item}
						</li>
					))}
			</ul>
		</div>
	)
}

export default Categories
