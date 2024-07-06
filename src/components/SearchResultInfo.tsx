import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
}

const SearchResultInfo = ({total, city}: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span className="">
            {total} Restaurants found in {city}
            <Link to="/" className="text-lg font-semibold underline cursor-pointer text-blue-600 ml-2">Change location</Link>
        </span>
    </div>
  )
}

export default SearchResultInfo;