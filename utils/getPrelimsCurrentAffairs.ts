// utils/getPrelimsCurrentAffairs.js

export const getPrelimsCurrentAffairs = (dailyNews) => {
    if (!Array.isArray(dailyNews)) return [];
  
    return dailyNews.filter(article =>
      // Filter logic - mark in JSON with a field `prelims: true`
      article?.prelims === true
    );
  };
  