type input = {
    items: Array<{
        title: string;
        action: Function;
    }>;
}

export default function Index({ items }: input): JSX.Element {
    return (
        <div className="rounded-lg py-1 border absolute">
            {items.map((item, key) => (
                <small key={key} className="px-4 text-gray-500 font-bold">{item.title}</small>
            ))}
        </div>
    )
}