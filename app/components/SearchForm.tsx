import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query} : {query?:string}) => {



    return (
        <Form action="/" className='search-form ' scroll={false}>
            <input type="text" className='search-input' name="query" placeholder="Search Startups" />

            <div className="flex gap-2">

                {query && <SearchFormReset/>}

                <button type="submit" className='search-btn'>
                    <i className="ri-search-line text-white"></i>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm