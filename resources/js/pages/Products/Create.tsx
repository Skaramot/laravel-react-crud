import { Head, Link,Form, useForm} from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { route } from 'ziggy-js'
import { Ziggy } from '@/ziggy'
import {  Alert, AlertDescription, AlertTitle,} from "@/components/ui/alert"
import { TriangleAlert } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Product',
        href: '/products/create',
    },
];




export default function Index () {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {




        e.preventDefault();
        //post(route('product.store'));
        post(route('products.store', undefined, undefined, Ziggy));
        console.log(data);
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Procucts" />
            <div className='w-8/12 p-4'>
                <form className='space-y-4' onSubmit={handleSubmit}>
                        {/* Display errors */}

                        {Object.keys(errors).length > 0 && (
                                <Alert>
                                <TriangleAlert/>
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    <ul>

                                        {Object.entries(errors).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                        ))}
                                    </ul>
                                </AlertDescription>
                                </Alert>

                        )}
                    <div className='gap-1.5'>
                        <Label htmlFor="product name">Name:</Label>
                        <Input placeholder='Product Name' value={data.name} onChange={e => setData('name', e.target.value)}></Input>

                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="product price">Price:</Label>
                        <Input placeholder='Product Price' value={data.price} onChange={e => setData('price', e.target.value)}></Input>

                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="product Description">Discription:</Label>
                        <Textarea placeholder='Product Discription' value={data.description} onChange={e => setData('description', e.target.value)}/>
                    </div>
                    <Button className='gap-1.5' type='submit'>Add Product</Button>
                </form>

            </div>

        </AppLayout>
    );
}
