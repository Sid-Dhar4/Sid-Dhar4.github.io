const projects = [
  {
    title: 'Real-Time Object Tracking Under a Robotics Latency Budget',
    description: 'A robotics perception benchmark for detection and multi-object tracking under practical latency constraints. Uses KITTI tracking data, YOLOv8, ByteTrack, ROS 2 outputs, risk diagnostics, and accuracy-latency evaluation.',
    image: 'images/tracking-demo.gif',
    technologies: ['Python', 'YOLOv8', 'ByteTrack', 'KITTI', 'ROS 2', 'C++'],
    link: 'https://github.com/Sid-Dhar4/real-time-tracking-latency-budget',
    linkLabel: 'View GitHub'
  },
  {
    title: 'VIO / SLAM Benchmark and Failure Atlas',
    description: 'A reproducible benchmark comparing ORB-SLAM3 and OpenVINS on EuRoC MAV sequences with trajectory conversion, evo APE/RPE metrics, runtime logging, plots, and failure-case analysis.',
    image: 'images/slam-demo.gif',
    technologies: ['VIO', 'SLAM', 'ORB-SLAM3', 'OpenVINS', 'EuRoC', 'evo'],
    link: 'https://github.com/Sid-Dhar4/vio-slam-benchmark-failure-atlas',
    linkLabel: 'View GitHub'
  },
  {
    title: 'Camera–IMU Calibration Sensitivity Benchmark',
    description: 'A reproducible OpenVINS benchmark measuring how camera–IMU extrinsic and timestamp perturbations affect VIO accuracy. Includes controlled perturbations, frozen online calibration, evo ATE/RPE metrics, and trajectory plots.',
    image: 'images/camera-imu-demo.png',
    technologies: ['OpenVINS', 'Camera-IMU', 'SE(3)', 'Python', 'ROS 2', 'evo'],
    link: 'https://github.com/Sid-Dhar4/camera-imu-calibration-sensitivity',
    linkLabel: 'View GitHub'
  },
  {
    title: 'ROS 2 RGB-D Mapping Pipeline',
    description: 'A ROS 2 Jazzy RGB-D mapping pipeline that publishes RGB/depth/camera-info topics, converts depth to colored PointCloud2, filters point clouds, accumulates a C++/PCL world-frame map, visualizes in RViz, and exports PCD/PLY maps.',
    image: 'images/rgbd-mapping-gif.gif',
    technologies: ['ROS 2', 'RGB-D', 'PointCloud2', 'PCL', 'C++', 'RViz'],
    link: 'https://github.com/Sid-Dhar4/ros2-rgbd-mapping-pipeline',
    linkLabel: 'View GitHub'
  },
  {
    title: 'RealSense D455 Live Elevation Mapping',
    description: 'Real-camera RGB-D mapping work using an Intel RealSense D455 in ROS 2. Verified live RGB-D/PointCloud2 topics, TF camera frames, elevation GridMap output, finite elevation cells, RTAB-Map experiments, and PCD cloud export.',
    image: 'images/realsense-demo.gif',
    technologies: ['RealSense D455', 'ROS 2', 'PointCloud2', 'GridMap', 'RTAB-Map'],
    link: 'https://github.com/Sid-Dhar4/ros2-rgbd-mapping-pipeline',
    linkLabel: 'Related GitHub'
  },
  {
    title: 'Franka Panda Block Stacking',
    description: 'Perception-guided manipulation work with a Franka Emika Panda arm. Integrated object detections, camera-to-end-effector calibration, base-frame target transforms, FK/IK, top-down grasp alignment, hover/pick/drop waypoints, and gripper control.',
    image: 'images/franka-demo.gif',
    technologies: ['Franka Panda', 'ROS', 'IK/FK', 'Manipulation', 'Calibration'],
    link: '',
    linkLabel: ''
  }
];

function renderProjects() {
  const container = document.querySelector('.project-list');
  if (!container) return;

  container.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'project-media';

    if (project.video) {
      const iframe = document.createElement('iframe');
      iframe.src = project.video;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen');
      mediaDiv.appendChild(iframe);
    } else if (project.image) {
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      mediaDiv.appendChild(img);
    }

    card.appendChild(mediaDiv);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'project-content';

    const titleEl = document.createElement('h3');
    titleEl.className = 'project-title';
    titleEl.textContent = project.title;
    contentDiv.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.className = 'project-description';
    descEl.textContent = project.description;
    contentDiv.appendChild(descEl);

    if (project.technologies && project.technologies.length > 0) {
      const techDiv = document.createElement('div');
      techDiv.className = 'project-technologies';

      project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techDiv.appendChild(span);
      });

      contentDiv.appendChild(techDiv);
    }

    if (project.link) {
      const linkDiv = document.createElement('div');
      linkDiv.className = 'project-link';

      const linkAnchor = document.createElement('a');
      linkAnchor.href = project.link;
      linkAnchor.target = '_blank';
      linkAnchor.rel = 'noopener noreferrer';
      linkAnchor.textContent = project.linkLabel || 'View project';

      linkDiv.appendChild(linkAnchor);
      contentDiv.appendChild(linkDiv);
    }

    card.appendChild(contentDiv);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
