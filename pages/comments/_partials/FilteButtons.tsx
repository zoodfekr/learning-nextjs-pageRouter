const FilteButtons = ({ handleFunction }: { handleFunction: (id: string) => void }) => {

    return (
        <div className="w-full flex gap-4 border border-gray-300 p-4 rounded-md bg-white shadow-sm justify-center">
            <button
                name="user1"
                onClick={() => handleFunction("1")}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                user1
            </button>
            <button
                name="user2"
                onClick={() => handleFunction("2")}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                user2
            </button>
        </div>
    )
};
export default FilteButtons;