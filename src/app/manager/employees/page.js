import prisma from "../../../../lib/prisma";

const get_employees = async() => {
    const users = await prisma.employee.findMany();
    return (
        <div className="flex justify-center items-center h-full">
            <span style={{marginTop: "4.5rem", marginLeft: "17rem"}} className="w-full">
                <span>
                {users.map((user) => (    
                    <a key={user.id} href="#" class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mr-4 mb-4">
        
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{user.name}</h5>
                    <p class="font-normal text-gray-700">{user.email}</p>
                    </a>
                    ))
                }
                </span>
            </span>
        </div>
    );
}
 
export default get_employees;