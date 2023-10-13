import { CATEGORIES } from '../lib/category'

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {CATEGORIES.map(cat => (
          <li className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
              onClick={() =>
                alert(`You clicked ${cat.name} but nothing happened`)
              }
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CategoryFilter
