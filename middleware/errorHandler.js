const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    if (err instanceof CustomNotFoundError) {
      res.status(404).json({ error: 'Not Found' });
      return;
    }
  
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;
  