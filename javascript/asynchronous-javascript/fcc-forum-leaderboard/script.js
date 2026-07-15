const forumLatest =
    'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
    299: { category: 'Career Advice', className: 'career' },
    409: { category: 'Project Feedback', className: 'feedback' },
    417: { category: 'freeCodeCamp Support', className: 'support' },
    421: { category: 'JavaScript', className: 'javascript' },
    423: { category: 'HTML - CSS', className: 'html-css' },
    424: { category: 'Python', className: 'python' },
    432: { category: 'You Can Do This!', className: 'motivation' },
    560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp) {
    // Parse the given timestamp from a string into a date.
    const timestampParsed = Date.parse(timestamp);
    // Retrieve the current time.
    const timeNow = Date.now();

    // Calculate the time elapsed, in milliseconds.
    let elapsed = timeNow - timestampParsed;

    // Convert from milliseconds to minutes.
    elapsed = elapsed / 1000 / 60;

    // Check if less than an hour has elapsed.
    if (elapsed < 60) {
        return `${Math.floor(elapsed)}m ago`;
    }
    // Check if less than a day has elapsed.
    else if (elapsed < 1440) {
        return `${Math.floor(elapsed / 60)}h ago`;
    }
    // Handle time elapsed longer than a day.
    else {
        return `${Math.floor(elapsed / 1440)}d ago`;
    }
}

function viewCount(views) {
    // Check if views is more than or equal to 1000.
    if (views >= 1000) {
        // If so, return the 'k' formatted views.
        return `${Math.floor(views / 1000)}k`;
    } else {
        // Otherwise, views remains the same.
        return views;
    }
}

function forumCategory(categoryID) {
    // Verify that the category ID is part of allCategories.
    if (Object.keys(allCategories).includes(String(categoryID))) {
        // Index the name and class of the category.
        const categoryName = allCategories[categoryID]["category"];
        const categoryClass = allCategories[categoryID]["className"];

        // Form the URL by adding <className>/<id> to the provided URL.
        const url = `${forumCategoryUrl}${categoryClass}/${categoryID}`;

        // Return the anchor element with class, href and category text.
        return `<a class="category ${categoryClass}" href="${url}">${categoryName}</a>`;
    }
    // Handle the case where it is not part of all categories.
    else {
        // Set category class to general.
        const categoryClass = "general";

        // Form the URL by adding <id> to the provided URL with general class.
        const url = `${forumCategoryUrl}${categoryClass}/${categoryID}`;

        // Return the anchor element.
        return `<a class="category ${categoryClass}" href="${url}">General</a>`
    }
}

function avatars(postersArray, usersArray) {
    let imagesArray = [];
    postersArray.forEach(
        poster => {
            // Get the ID for each poster.
            const posterID = poster.user_id;

            // Search for the corresponding ID in the users array.
            const posterUserObject = usersArray.find(user => user.id == posterID);

            // Retrieve the name and avatar template for the user.
            const posterName = posterUserObject["name"];
            const posterAvatarTemplate = posterUserObject["avatar_template"];

            // Create a mutable string version of the avatar template.
            let posterAvatar = posterAvatarTemplate;

            // Set the size of the avatar.
            posterAvatar = posterAvatar.replace("{size}", "30")

            // Check if the avatar template starts with a slash indicating path.
            if (posterAvatarTemplate.startsWith("/")) {
                // If so, prepend the avatarUrl to help it access the image.
                posterAvatar = avatarUrl + posterAvatar;
            }

            // Add the image element to the array complete with processed image and alt.
            imagesArray.push(`<img src="${posterAvatar}" alt="${posterName}">`)
        }
    )

    // Return the joined up images.
    return imagesArray.join("");
}

const postsContainerEl = document.querySelector("#posts-container");

function showLatestPosts(data) {
    // Extract the users and the list of topics from the provided data.
    const users = data["users"];
    const topicList = data["topic_list"];
    const topics = topicList["topics"]

    // Define an array to store the html strings of each topic.
    let tableRowStrings = [];

    topics.forEach(topic => {
        // Define an array to store the five td (table cell) elements.
        let tableCellStrings = [];

        // Process the properties of each topic.
        const topicID = topic["id"];
        const topicTitle = topic["title"];
        const topicViews = topic["views"];
        const topicPostsCount = topic["posts_count"];
        const topicSlug = topic["slug"];
        const topicPosters = topic["posters"];
        const topicCategoryID = topic["category_id"];
        const topicBumpedAt = topic["bumped_at"];

        // Construct the first table cell, the post title and category.
        const topicUrl = `${forumTopicUrl}${topicSlug}/${topicID}`;
        const postTitleAnchor = `<a class="post-title" href="${topicUrl}">${topicTitle}</a>`
        const topicCategoryAnchor = forumCategory(topicCategoryID);
        // Add this to the array of table cells.
        tableCellStrings.push(`<td>${postTitleAnchor} ${topicCategoryAnchor}</td>`);

        // Construct the second table cell, the avatars.
        const images = avatars(topicPosters, users);
        // Add this to the array of table cells.
        tableCellStrings.push(`<td><div class="avatar-container">${images}</div></td>`);

        // Construct the third table cell, the number of replies to the post.
        const replyCount = topicPostsCount - 1;
        // Add this to the array of table cells.
        tableCellStrings.push(`<td>${replyCount}</td>`)

        // Construct the fourth table cell, the number of views on the post.
        // Call the viewCount() function here.
        const formattedViews = viewCount(topicViews);
        // Add this to the array of table cells.
        tableCellStrings.push(`<td>${formattedViews}</td>`)

        // Finally, construct the time passed using bumped at and the timeAgo() function.
        const timePassed = timeAgo(topicBumpedAt);
        // Add this to the array of table cells.
        tableCellStrings.push(`<td>${timePassed}</td>`)

        // Add the table row strings array.
        tableRowStrings.push(`<tr>${tableCellStrings.join("")}</tr>`);
    });

    postsContainerEl.innerHTML = tableRowStrings.join("");
}

async function fetchData() {
    // Use a try...catch to catch and output errors to the console.
    try {
        // Wait for fetch to make the API request.
        const response = await fetch(forumLatest);
        // Wait for the response from the fetch request to be converted.
        const jsonified = await response.json();
        // Assuming both have been fulfilled we can pass it to showLatestPosts.
        showLatestPosts(jsonified);
    } catch (error) {
        // If an error is encountered, we can log it to the console.
        console.log(error);
    }
}

fetchData();