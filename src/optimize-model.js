import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, draco, textureResize } from '@gltf-transform/functions';
import draco3d from 'draco3d';

async function optimizeModel() {
  console.log('🔄 Loading 3D model...');
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  const inputPath = './public/models/mens_shirt.glb';
  const outputPath = './public/models/mens_shirt_optimized.glb';
  
  const document = await io.read(inputPath);

  console.log('⚙️ Compressing mesh & downscaling textures...');
  await document.transform(
    textureResize({ size: [1024, 1024] }),
    dedup(),
    prune(),
    draco({ method: 'edgebreaker', quantizePosition: 14 })
  );

  await io.write(outputPath, document);
  console.log(`✅ Success! Minified model saved to: ${outputPath}`);
}

optimizeModel().catch((err) => console.error('❌ Error optimizing model:', err));