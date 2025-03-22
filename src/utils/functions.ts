const images = import.meta.glob("@Assets/projectsData/*/*.{png,jpg}", { eager: true }) as Record<string, { default: string }>;
const videos = import.meta.glob("@Assets/projectsData/*/*.mp4", { eager: true }) as Record<string, { default: string }>;
const gifs = import.meta.glob("@Assets/projectsData/*/*.gif", { eager: true }) as Record<string, { default: string }>;

export const getProjectImages = (projectName: string) => {
    const projectImages = Object.keys(images).filter((path) =>
        path.includes(`/projectsData/${projectName}/`)
    );

    return projectImages.map((imagePath) => images[imagePath]?.default);
};

export const getProjectGifs = (projectName: string) => {
    const projectGifs = Object.keys(gifs).filter((path) =>
        path.includes(`/projectsData/${projectName}/`)
    );

    return projectGifs.map((gifPath) => gifs[gifPath]?.default);
};

export const getProjectThumbnail = (projectName: string) => {
    const projectImages = Object.keys(images).filter((path) =>
        path.includes(`/projectsData/${projectName}/`)
    );

    if (projectImages.length > 0) {
        return images[projectImages[0]].default;
    }

    return undefined;
};

export const getProjectVideo = (projectName: string) => {
    const projectVideos = Object.keys(videos).filter((path) =>
        path.includes(`/projectsData/${projectName}/`)
    );

    if (projectVideos.length > 0) {
        return videos[projectVideos[0]].default;
    }

    return undefined;
};