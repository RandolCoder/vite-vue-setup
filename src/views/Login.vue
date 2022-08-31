<template>
    <div class="h-screen flex align-items-center justify-content-center">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <img src="https://media.istockphoto.com/vectors/vector-handwritten-logo-letter-r-vector-id1008257372?k=20&m=1008257372&s=170667a&w=0&h=Jq9BJYhOCzEL2q7aWBHa9_rvCwlw4SUb_SlnK0mRQ40=" alt="Image" height="50" class="mb-3">
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>
    
            <div>
                <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" class="w-full mb-3" />
        
                <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" class="w-full mb-3" />
        
                <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
            </div>
        </div>
    </div>
</template>