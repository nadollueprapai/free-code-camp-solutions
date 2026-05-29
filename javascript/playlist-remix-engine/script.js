const playlists = [
    [
        {
            trackId: "trk101",
            artist: "Velvet Comet",
            title: "Crimson Afterglow",
            votes: 5,
            bpm: 122
        },
        {
            trackId: "trk102",
            artist: "Neon Harbor",
            title: "Static Horizon",
            votes: 2,
            bpm: 108
        },
        {
            trackId: "trk103",
            artist: "Lunar Arcade",
            title: "Midnight Frequency",
            votes: 4,
            bpm: 128
        }
    ],
    [
        {
            trackId: "trk201",
            artist: "Solar Echo",
            title: "Glass Skyline",
            votes: 3,
            bpm: 115
        },
        {
            trackId: "trk202",
            artist: "Velvet Comet",
            title: "Satellite Hearts",
            votes: 6,
            bpm: 124
        }
    ]
];

function flattenPlaylists(playlists) {
    // Check if playlists is an array.
    if (!(Array.isArray(playlists))) {
        // If not, return an empty array.
        return []
    }

    // Create the array to add to and return.
    let flattenedPlaylist = new Array()

    // Parse the playlists.
    for (let i = 0; i < playlists.length; i++) {
        // Index the playlist.
        let playlist = playlists[i]

        // Parse the tracks.
        for (let j = 0; j < playlist.length; j++) {
            // Index the track.
            let track = playlist[j]

            // Add source to the track object.
            // i is the playlist index.
            // j is the track index.
            Object.assign(track, { source: [i, j] });

            // Add the track to the flattened playlist.
            flattenedPlaylist.push(track);
        }
    }

    // Return the flattenedPlaylist.
    return flattenedPlaylist;
}

function scoreTracks(tracks) {
    // Create an array to add to and return.
    let scoredTracks = new Array();

    // Iterate through the tracks.
    for (let track of tracks) {
        // Add to the tracks the score property with the given formula.
        Object.assign(track, { score: track["votes"] * 10 - Math.abs(track["bpm"] - 120) });

        // Add the track to the scoredTracks.
        scoredTracks.push(track);
    }

    // Return the scoredTracks.
    return scoredTracks;
}

function dedupeTracks(tracks) {
    // Create an array to add to and return.
    let dedupedTracks = new Array();

    // Create an array to track the trackIds that have already been encountered.
    let encounteredIds = new Array();

    // Iterate through the tracks.
    for (let track of tracks) {
        // Check if we have encountered the track before.
        if (!(encounteredIds.includes(track["trackId"]))) {
            // If we haven't, add the trackId to the list of encountered trackIds.
            encounteredIds.push(track["trackId"]);
            // Add the track to the dedupedTracks.
            dedupedTracks.push(track);
        }
    }

    return dedupedTracks;
}

function enforceArtistQuota(tracks, maxPerArtist) {
    // Create the array to add to and return.
    let enforcedTracks = new Array()

    // Create a map of the artists encountered.
    let encounteredArtists = new Map()

    // Parse the tracks.
    for (let track of tracks) {
        // Index the artist.
        let artist = track["artist"];
        // Check if the artist has already been encountered.
        if (encounteredArtists.has(artist)) {
            // Retrieve the times encountered.
            let count = encounteredArtists.get(artist);

            // Check if the amount has already met the boundary.
            if (count < maxPerArtist) {
                // If not, add the track.
                enforcedTracks.push(track);
            }

            // Update the times encountered.
            count += 1;
            encounteredArtists.set(artist, count)
        } else {
            // If the artist has never been encountered, add them to the map.
            encounteredArtists.set(artist, 1);

            // Add the track to the enforced tracks.
            enforcedTracks.push(track);
        }
    }
    return enforcedTracks;
}

function buildSchedule(tracks) {
    // Create a schedule array to add to and return.
    let schedule = new Array();

    for (let i = 0; i < tracks.length; i++) {
        // Prepare the slot number.
        let oneBasedIndex = i + 1;

        // Add to the schedule the object in the format {slot, trackId}.
        schedule.push({ slot: oneBasedIndex, trackId: tracks[i]["trackId"] });
    }

    // Return the schedule.
    return schedule;
}

function remixPlaylist(playlists, maxPerArtist) {
    let flattenedPlaylists = flattenPlaylists(playlists);
    let scoredTracks = scoreTracks(flattenedPlaylists);
    let dedupedTracks = dedupeTracks(scoredTracks);
    let enforcedTracks = enforceArtistQuota(dedupedTracks, maxPerArtist);
    let schedule = buildSchedule(enforcedTracks);

    return schedule;
}

console.log(remixPlaylist(playlists, 1))
