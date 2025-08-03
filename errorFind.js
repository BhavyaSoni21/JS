// This code demonstrates error handling in JavaScript, specifically for JSON parsing and file processing.
// It includes examples of try-catch blocks, JSON parsing, and file operations using promises.
try{
    const jsonData = {"name":"Alice","age":25};
    const user = JSON.parse(jsonData);
    console.log(`Name: ${user.name}`);

    const badJson = '{"name": "Bob"}';
    const badUser = JSON.parse(badJson);
    console.log(`Name: ${badUser.name}`);
}catch (error) {
    console.error("Error parsing JSON:", error.message);
}   
console.log("Continuing execution after error handling.");

//Processing names from a file
// This code reads names from a file, formats them, and writes them to another file.
const fs = require('fs/promises');
async function processName() {
    const inputfilepath = 'name.txt';
    const outputfilepath = 'formattedName.txt';
    try {
        console.log("Starting to process file...");
        const fileContent = await fs.readFile(inputfilepath, 'utf8');
        const names = fileContent.trim().split('\n');
        console.log(`Read ${names.length} names from file.`);
        const formattedNames = names.map(name => {
            const trimmedName = name.trim();
            return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
        });
        const outputContent = formattedNames.join('\n');
        await fs.writeFile(outputfilepath, outputContent, 'utf8');
        console.log(`Formatted names written to ${outputfilepath}`);    
    }catch (error) {
        console.error("Error processing file:", error.message);
    }
} 
processName();

// Fetching posts from an API
// This code fetches posts from a public API and handles errors during the fetch operation.
const fetch = require('node-fetch');
async function fetchPosts() {
    console.log("Fetching posts from API...");
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        console.log("Fetched posts successfully.");
        posts.slice(0, 5).forEach(post => {
            console.log(`- ${post.title}`);
        });
    } catch (error) {
        console.error("\nError fetching posts:", error.message);
    }
} 
fetchPosts();
