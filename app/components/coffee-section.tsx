
const CoffeeSection = () => {
    type CoffeeItem = {
        title: string;
        calories: string;
        totalFat: string;
        saturatedFat: string;
        transFat: string;
        percentage1: string;
        percentage2: string;
        cta: string;
        description?: string;
    };

    const coffeeItems: CoffeeItem[] = [
        {
            title: "Midnight Mint Mocha Frappuccino",
            calories: "420",
            totalFat: "19g",
            saturatedFat: "13g",
            transFat: "0.5g",
            percentage1: "29%",
            percentage2: "65%",
            cta: "ADD TO BASKET"
            // description: "A delicious blend of mint and chocolate." // Optional
        },
        {
            title: "Midnight Mint Mocha Frappuccino",
            calories: "420",
            totalFat: "19g",
            saturatedFat: "13g",
            transFat: "0.5g",
            percentage1: "29%",
            percentage2: "65%",
            cta: "ADD TO BASKET"
            // description: "A delicious blend of mint and chocolate." // Optional
        },
        {
            title: "Midnight Mint Mocha Frappuccino",
            calories: "420",
            totalFat: "19g",
            saturatedFat: "13g",
            transFat: "0.5g",
            percentage1: "29%",
            percentage2: "65%",
            cta: "ADD TO BASKET"
            // description: "A delicious blend of mint and chocolate." // Optional
        },
        {
            title: "Midnight Mint Mocha Frappuccino",
            calories: "420",
            totalFat: "19g",
            saturatedFat: "13g",
            transFat: "0.5g",
            percentage1: "29%",
            percentage2: "65%",
            cta: "ADD TO BASKET"
            // description: "A delicious blend of mint and chocolate." // Optional
        }
    ];


    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-stone-800 mb-12">
                    Coffee Collection
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coffeeItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
                        >
                            <h2 className="text-lg font-semibold text-stone-900 mb-4 leading-snug">
                                {item.title}
                            </h2>


                            {/* Info Block (hidden on hover) */}
                            <div className="group-hover:hidden">
                                {item.calories && (
                                    <div className="mb-6">
                                        <h3 className="text-sm font-medium text-gray-500 mb-2">Nutrition</h3>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            <li><span className="font-medium">Calories:</span> {item.calories}</li>
                                            <li><span className="font-medium">Total Fat:</span> {item.totalFat}</li>
                                            <li><span className="font-medium">Saturated Fat:</span> {item.saturatedFat}</li>
                                            <li><span className="font-medium">Trans Fat:</span> {item.transFat}</li>
                                        </ul>
                                        <div className="flex justify-between text-sm mt-3">
                                            <span className="text-emerald-600 font-semibold">{item.percentage1}</span>
                                            <span className="text-teal-600 font-semibold">{item.percentage2}</span>
                                        </div>
                                    </div>
                                )}


                                {item.description && (
                                    <p className="text-gray-600 italic mb-6">{item.description}</p>
                                )}
                            </div>


                            {/* CTA button (hidden by default, shows on hover) */}
                            {item.cta && (
                                <div className="hidden group-hover:block mt-auto">
                                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                                        {item.cta}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default CoffeeSection;



