/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'

const PlanetCard = (props: any) => {

    const {
        name,
        diameter,
        rotation_period,
        gravity,
        population,
        climate,
        terrain,
        surface_water    } = props
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <Image
            src={`/Image-not-found.png`}
            alt={`${name} planet`}
            height={250}
            width={350}
            objectFit="cover"
            loading="eager"
            priority
            className="rounded-t-lg"
            />
            </a>
            <br />
            <div className="p-5">
                <a href="#" className='mb-30'>
                 <h2 className="text-4xl font-extrabold">{name}</h2>
                </a>
                <div className="mt-6 grid grid-rows-2 grid-flow-col gap-2">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Diameter</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{diameter}</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rotation Period</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{rotation_period}</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Gravity</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{gravity}</p>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{population}</p>
                </div>
                <span className="mt-10 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{climate}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{terrain}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{surface_water}</span>
            </div>
        </div>

    )
}
export default PlanetCard