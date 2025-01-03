import { NextResponse } from 'next/server';
import data from '@/data/portfolio.json';
import { IPortfolioItem } from '@/shared/types/portfolio.interface';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        const idParam = Array.isArray(id) ? id[0] : id;
        const item = data.items.find((portfolioItem: IPortfolioItem) => portfolioItem.id === Number(idParam));

        if (item) {
            return NextResponse.json(item, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Item not found' }, { status: 404 });
        }
    } else {
        return NextResponse.json(data.items, { status: 200 });
    }
}