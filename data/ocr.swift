import Vision
import AppKit
import Foundation

let args = CommandLine.arguments
if args.count < 2 {
    print("Usage: ocr <image_path>")
    exit(1)
}

let imagePath = args[1]
guard let image = NSImage(contentsOfFile: imagePath),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    print("Could not load image")
    exit(1)
}

let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    let recognizedStrings = observations.compactMap { observation in
        return observation.topCandidates(1).first?.string
    }
    print("---TEXT START---")
    print(recognizedStrings.joined(separator: "\n"))
    print("---TEXT END---")
}
request.recognitionLevel = .accurate
request.recognitionLanguages = ["sv-SE", "en-US"]

try? requestHandler.perform([request])
