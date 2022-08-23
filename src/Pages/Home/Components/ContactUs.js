import React from 'react';

const ContactUs = () => {
    return (
        <section class="bg-primary mt-32 p-16">
            <div class="flex gap-4">

                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold">Let us handle your</h1>
                    <h1 class="text-3xl font-bold"> project, professionally</h1>
                    <p class="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div class="ml-44">

                    <input type="text" placeholder="Your name/company's name" class="input rounded mb-5 w-full max-w-xs" />
                    <input type="text" placeholder="Your name/company's0 name" class="input rounded-none mb-5 w-full max-w-xs" />
                    <textarea class="textarea w-80 rounded h-32" placeholder="Bio"></textarea>
                    <button class="btn btn-secondary mt-3 px-9 text-white">Send</button>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;