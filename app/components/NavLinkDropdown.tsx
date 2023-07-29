export default function NavLinkDropdown() {
    return (
        <select name="grocery" className="bg-inherit block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " id="grocery">
            <option value="grocery">Grocery</option>
            <option value="grocery">Bakery</option>
            <option value="grocery">Fruits</option>
        </select>
    )
} 