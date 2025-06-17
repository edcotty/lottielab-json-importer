figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import-json') {
    try {
      const jsonData = JSON.parse(msg.data);
      if (!jsonData.v || !jsonData.layers) {
        figma.notify('Invalid Lottie JSON file');
        return;
      }
      figma.notify('Lottie JSON loaded; conversion to GIF not implemented yet.');
      // Add conversion logic here
    } catch (error) {
      figma.notify('Error importing Lottie JSON: ' + error.message);
    }
  }
};
